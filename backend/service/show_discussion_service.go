package service

import (
	"backend/serializer"
	"go/ast"
)

type ShowDiscussionService struct {
}

func ShowDiscussionDetail(ID int) serializer.Response serializer.Response{

	return BuildDiscussionDetailResponse()
}

func ShowDiscussionOnSignUp() serializer.Response {

}