package serializer

import (
	"backend/model"
	"time"
)

type Discussion struct {
	ChainMan		string		`json:"chain_man"`
	DiscussionName	string		`json:"discussion_name"`
	Message			[]Message	`json:"message"`
}

type DiscussionList struct {
	Discussion		[]DiscussionListUnit	 `json:"discussion"`
}

type DiscussionListUnit struct {
	ID				uint		`json:"id"`
	Name			string		`json:"name"`
}

type Message struct {
	Content			string		`json:"content"`
	CreateAt		time.Time	`json:"create_at"`
}

func BuildDiscussionDetail(discussion model.Discussion) Discussion {
	var user model.User
	model.DB.Where("id = ?", discussion.UID).First(&user)
	messages := make([]Message, 0)
	for _, msg := range discussion.Message {
		messages = append(messages, Message{
			Content: msg.Content,
			CreateAt: msg.CreatedAt,
		})
	}
	return Discussion{
		ChainMan:       user.UserName,
		DiscussionName: discussion.Name,
		Message:        messages,
	}
}

func BuildDiscussionDetailResponse(discussion model.Discussion) Response {
	return Response{
		Code:  0,
		Data:  BuildDiscussionDetail(discussion),
	}
}

func BuildDiscussionList(discussions []model.Discussion) DiscussionList {
	discussionListUnit := make([]DiscussionListUnit, 0)
	for _, discussion := range discussions{
		discussionListUnit = append(discussionListUnit, DiscussionListUnit{
			ID:   discussion.ID,
			Name: discussion.Name,
		})
	}
	return DiscussionList{Discussion: discussionListUnit}
}

func BuildDiscussionListResponse(discussions []model.Discussion) Response {
	return Response{
		Code:  0,
		Data:  BuildDiscussionList(discussions),
		Msg:   "Success",
	}
}