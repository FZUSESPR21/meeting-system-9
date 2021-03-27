package serializer

import (
	"backend/model"
	"backend/util"
)

// User 用户序列化器
type User struct {
	ID        uint   `json:"id"`
	UserName  string `json:"user_name"`
	CreatedAt int64  `json:"created_at"`
}

// UserList 用户序列化器
type UserList struct {
	Page       	int64   			`json:"id"`
	PageCount	int64				`json:"page_count"`
	User  		[]UserListUnit		`json:"user"`
}

type UserListUnit struct {
	UserName		string						`json:"user_name"`
	Discussion		[]DiscussionListUnit		`json:"discussion"`
}

// BuildUser 序列化用户
func BuildUser(user model.User) User {
	return User{
		ID:        user.ID,
		UserName:  user.UserName,
		CreatedAt: user.CreatedAt.Unix(),
	}
}

// BuildUserResponse 序列化用户响应
func BuildUserResponse(user model.User) Response {
	return Response{
		Data: BuildUser(user),
	}
}

// BuildUserResponse 序列化用户响应
func BuildUserListResponse(user []model.User, page, pageCount int64) Response {
	if pageCount == util.PageCountError {
		return ParamErr("页码超出", nil)
	}

	var unit []UserListUnit
	for _, u := range user {
		var discussion = make([]DiscussionListUnit, 0)
		for _, d := range u.Discussion{
			discussion = append(discussion, DiscussionListUnit{
				ID:   d.ID,
				Name: d.Name,
			})
		}
		unit = append(unit, UserListUnit{
			UserName:   u.UserName,
			Discussion: discussion,
		})
	}

	return Response{
		Data: UserList{
			Page: page,
			PageCount: pageCount,
			User: unit,
		},
	}
}