package model

import (
	"github.com/jinzhu/gorm"
)

//  Discussion 分会议模型
type Discussion struct {
	gorm.Model
	UID 		uint		`gorm:"not null;unique"`
	Name 		string		`gorm:"not null;unique"`
	Message 	[]Message
}


//根据分论坛ID获取分论坛详情
func GetDiscussionDetailByID(ID uint) []Message {
	var message []Message
	discussion := new(Discussion)
	discussion.ID = ID
	DB.Model(&discussion).Association("Message").Find(&message)
	return message
}
