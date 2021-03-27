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


// SendMessage 秘书/分论坛主席 发送某个特定ID号的分论坛消息
func SendMessage(ID uint, content string) error{
	discussion := new(Discussion)
	result := DB.Where("id = ?", ID).First(&discussion)
	if result.Error != nil {
		return result.Error
	}

	var message = Message{}
	message.DiscussionID = ID
	message.Content = content
	DB.Save(&message)
	return nil
}