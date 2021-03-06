package model

import (
	"backend/util"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

// User 用户模型
type User struct {
	gorm.Model
	UserName       		string  		`gorm:"not null;unique"`
	PasswordDigest 		string			`gorm:"not null"`
	Auth				int				`gorm:"not null"`
	Discussion			[]Discussion	`gorm:"many2many:user_discussion;"`
}

const (
	// PassWordCost 密码加密难度
	PassWordCost = 12

	// 用户身份
	// 普通
	Normal = 0
	// 秘书
	Secretory = 1
	// 分论坛主席
	DiscussionChairman = 2
	// 论坛主席
	MainChairman = 5
)

// GetUser 用ID获取用户
func GetUser(ID interface{}) (User, error) {
	var user User
	result := DB.First(&user, ID)
	return user, result.Error
}

// GetUserList 获取参会者列表
// 页码超出则返回nil, util.PageCountError, nil
func GetUserList(page int64) ([]User, int64, error) {
	var user User
	var total int64
	var pageCount int64
	DB.Model(&user).Count(&total)
	if util.PageOverFlow(total, page) {
		return nil, util.PageCountError, nil
	} else {
		pageCount = util.TotalPages(total)
	}
	users := make([]User, 0)
	result := DB.Preload("Discussion").Where("auth = ?", 0).Limit(util.PageMaxSize).Offset(util.PageMaxSize * ((page) - 1)).Find(&users)
	return users, pageCount, result.Error
}

// SetPassword 设置密码
func (user *User) SetPassword(password string) error {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), PassWordCost)
	if err != nil {
		return err
	}
	user.PasswordDigest = string(bytes)
	return nil
}

// CheckPassword 校验密码
func (user *User) CheckPassword(password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(user.PasswordDigest), []byte(password))
	return err == nil
}


//根据用户ID展示其参加的各个分会议最新信息
func (user *User) GetUserDiscussions() []Discussion {
	var discussions []Discussion
	DB.Model(&user).Association("Discussion").Find(&discussions)
	return discussions
}

//获取分会议主席的最新信息
func (user *User) GetChairmanDiscussion() Discussion {
	var discussion Discussion
	DB.Model(&user).Association("Discussion").Find(&discussion)
	return discussion
}

//GetUserSum 获取用户总数
func GetUserSum() int {
	var sum int
	DB.Model(&User{}).Count(&sum)
	return sum
}