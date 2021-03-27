package service

import (
	"backend/model"
	"backend/serializer"
)

type UserHomeService struct {
	
}

func UserMe(user model.User) serializer.Response {
	return serializer.Response{
		Data:  user.GetUserDiscussions(),
	}
}