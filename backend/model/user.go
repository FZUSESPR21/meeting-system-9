package model

import (
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

// User 用户模型
type User struct {
	gorm.Model
	UserName       		string  	`gorm:"not null;unique"`
	PasswordDigest 		string		`gorm:"not null"`
	Auth				int			`gorm:"not null"`
}

const (
	// PassWordCost 密码加密难度
	PassWordCost = 12

	// 用户身份
	// 普通
	Normal = 0
	// 秘书
	Secretory = 1
	// 分论坛主席
	DiscussionChairman = 2
	// 论坛主席
	MainChairman = 5
)

// GetUser 用ID获取用户
func GetUser(ID interface{}) (User, error) {
	var user User
	result := DB.First(&user, ID)
	return user, result.Error
}

// SetPassword 设置密码
func (user *User) SetPassword(password string) error {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), PassWordCost)
	if err != nil {
		return err
	}
	user.PasswordDigest = string(bytes)
	return nil
}

// CheckPassword 校验密码
func (user *User) CheckPassword(password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(user.PasswordDigest), []byte(password))
	return err == nil
}
