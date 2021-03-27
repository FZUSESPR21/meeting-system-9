package model

import (
	"github.com/jinzhu/gorm"
)


//  Message 消息模型
type  Message struct {
	gorm.Model
	Content 		string	`gorm:"not null"`
	DiscussionID 	uint		`gorm:"not null;unique"`
}


// SecretarySendMessage 秘书发送某个特定ID号的分论坛消息
func SecretarySendMessage(ID uint, content string) {
	var message = Message{}
	message.DiscussionID = ID
	message.Content = content
	DB.Save(message)
}