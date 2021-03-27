package service

import (
	"backend/model"
	"backend/serializer"
)

type SecretorySendMessageService struct {
	DiscussionId		int		`form:"discussion_id" json:"discussion_id" binding:"required"`
	Message				string		`form:"message" json:"message" binding:"required"`
}

type ChairmanSendMessageService struct {
	Message				string		`form:"message" json:"message" binding:"required"`
}

func (service *SecretorySendMessageService) SecretorySendMessage() serializer.Response {
	if err := model.SendMessage(uint(service.DiscussionId), service.Message); err != nil {
		return serializer.ParamErr("论坛不存在", err)
	} else {
		return serializer.Response{
			Code: 0,
			Msg: "Success",
		}
	}
}

func (service *ChairmanSendMessageService) ChairmanSendMessage(user model.User) serializer.Response {
	if err := model.SendMessage(user.GetChairmanDiscussion().ID, service.Message); err != nil {
		return serializer.ParamErr("发送消息错误", err)
	} else {
		return serializer.Response{
			Code:  0,
			Msg:   "Success",
		}
	}
}