package model

import (
	"github.com/jinzhu/gorm"
)


//  Message 消息模型
type  Message struct {
	gorm.Model
	Content 		string	`gorm:"not null"`
	DiscussionID 	int		`gorm:"not null;unique"`
}

