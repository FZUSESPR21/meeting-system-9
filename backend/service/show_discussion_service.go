package service

import (
	"backend/serializer"
	"go/ast"
)

type ShowDiscussionService struct {
}

func ShowDiscussionDetail() serializer.Response {

	return BuildDiscussionDetailResponse()
}

func ShowDiscussionOnSignUp() serializer.Response {

}