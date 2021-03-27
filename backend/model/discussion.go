package model

import (
	"github.com/jinzhu/gorm"
)


//  Discussion 分会议模型
type Discussion struct {
	gorm.Model
	UID 		int		`gorm:"not null;unique"`
	Name 		string	`gorm:"not null;unique"`
}

