package service

import (
	"backend/cache"
	"backend/model"
	"backend/serializer"
	"context"
	"strconv"
)

// UserRegisterService 管理用户注册服务
type UserRegisterService struct {
	UserName        string 			`form:"username" json:"username" binding:"required,min=5,max=30"`
	Password        string 			`form:"password" json:"password" binding:"required,min=8,max=40"`
	Discussion		[]Discussions	`form:"discussion" json:"discussion"`
}

type Discussions struct {
	ID				int	`form:"id" json:"id" binding:"required"`
}

// valid 验证表单
func (service *UserRegisterService) valid() *serializer.Response {
	count := 0

	model.DB.Model(&model.User{}).Where("user_name = ?", service.UserName).Count(&count)
	if count > 0 {
		return &serializer.Response{
			Code: 40001,
			Msg:  "用户名已经注册",
		}
	}

	return nil
}

// Register 用户注册
func (service *UserRegisterService) Register() serializer.Response {
	var dis = make([]model.Discussion, 0)
	for range service.Discussion {
		dis = append(dis, model.Discussion{
			UID:     0,
			Name:    "",
			Message: nil,
		})
	}
	user := model.User{
		UserName: service.UserName,
		Discussion: dis,
	}

	// 表单验证
	if err := service.valid(); err != nil {
		return *err
	}

	// 加密密码
	if err := user.SetPassword(service.Password); err != nil {
		return serializer.Err(
			serializer.CodeEncryptError,
			"密码加密失败",
			err,
		)
	}

	// 创建用户
	if err := model.DB.Create(&user).Error; err != nil {
		return serializer.ParamErr("注册失败", err)
	}

	for _, discussion := range service.Discussion {
		cache.RedisClient.Incr(context.Background(), "TM" + strconv.Itoa(discussion.ID))
	}

	return serializer.BuildUserResponse(user)
}
