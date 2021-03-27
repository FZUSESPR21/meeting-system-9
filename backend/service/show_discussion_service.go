package service

import (
	"backend/cache"
	"backend/model"
	"backend/serializer"
	"backend/util"
	"context"
	"strconv"
)

type ShowDiscussionService struct {
}

func (service *ShowDiscussionService) ShowDiscussionDetail(ID int) serializer.Response {
	if ID < 0 {
		return serializer.ParamErr("ID错误", nil)
	}

	return serializer.BuildDiscussionDetailResponse(model.GetDiscussionDetail(uint(ID)))
}

func (service *ShowDiscussionService) ShowDiscussionOnSignUp() serializer.Response {
	return serializer.BuildDiscussionListResponse(model.GetDiscussionList())
}

func (service *ShowDiscussionService)  ShowDiscussionMember(ID int) serializer.Response {
	if ID < 0 {
		return serializer.ParamErr("ID错误", nil)
	}

	sum := model.GetMemberSum(uint(ID))
	r, err := cache.RedisClient.Get(context.Background(), "TM" + strconv.Itoa(ID)).Result()

	if err != nil {
		util.Log().Error(err.Error())
		return serializer.ParamErr("ID错误", err)
	}
	result, _ := strconv.Atoi(r)

	return serializer.Response{
		Code:  0,
		Data:  serializer.BuildCountResponse(int(sum), result),
		Msg:   "Success",
	}
}