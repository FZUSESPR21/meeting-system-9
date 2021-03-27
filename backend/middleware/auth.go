package middleware

import (
	"backend/model"
	"backend/serializer"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

// CurrentUser 获取登录用户
func CurrentUser() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		uid := session.Get("user_id")
		if uid != nil {
			user, err := model.GetUser(uid)
			if err == nil {
				c.Set("user", &user)
			}
		}
		c.Next()
	}
}

// LoginRequired 需要登录
func LoginRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		if user, _ := c.Get("user"); user != nil {
			if _, ok := user.(*model.User); ok {
				c.Next()
				return
			}
		}

		c.JSON(200, serializer.CheckLogin())
		c.Abort()
	}
}

// RoleRequired
func RoleRequired(role int) gin.HandlerFunc {
	return func(c *gin.Context) {
		u, _ := c.Get("user")
		user, _ := u.(*model.User)
		if user.Auth == role {
			c.Next()
			return
		}
		c.JSON(200, serializer.CheckAuth())
		c.Abort()
	}
}
