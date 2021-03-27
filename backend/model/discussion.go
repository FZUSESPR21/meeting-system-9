package model

import (
	"github.com/jinzhu/gorm"
)

//  Discussion 分会议模型
type Discussion struct {
	gorm.Model
	UID 		uint		`gorm:"not null"`
	Name 		string		`gorm:"not null"`
	Message 	[]Message
}

//GetDiscussionDetail 根据分论坛ID获取分论坛详情
func GetDiscussionDetail(ID uint) Discussion {
	discussion := new(Discussion)
	discussion.ID = ID
	DB.Find(&discussion)
	return *discussion
}

//GetDiscussionList 注册时展示分论坛列表
func GetDiscussionList() []Discussion {
	discussion := new([]Discussion)
	DB.Find(&discussion)
	return *discussion
}

//GetMemberSum 根据分论坛ID获取分论坛的人数
func GetMemberSum(ID uint) uint {
	var result []string
	r := DB.Raw("SELECT user_id FROM user_discussion Where discussion_id = ?", ID).Find(&result).RowsAffected
	return uint(r)
}
