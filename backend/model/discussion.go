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


//GetDiscussionDetail 根据分论坛ID获取分论坛详情
func GetDiscussionDetail(ID uint) Discussion {
	discussion := new(Discussion)
	discussion.ID = ID
	DB.Find(&discussion)
	return *discussion
}

//ShowDiscussionList 注册时展示分论坛列表
func ShowDiscussionList() []Discussion {
	discussion := new([]Discussion)
	DB.Find(&discussion)
	return *discussion
}

//GetMemberSum 根据分论坛ID获取分论坛的人数
func GetMemberSum(ID uint) uint {
	var users []User
	DB.Find(&users)
	var sum uint = 0
	discussions := new([]Discussion)
	for _,user := range users{
		*discussions = user.Discussion
		for _,discussion := range *discussions{
			if discussion.ID == ID {
				sum++
			}
		}
	}
	return sum
}
