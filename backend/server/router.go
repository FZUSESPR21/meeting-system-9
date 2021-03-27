package server

import (
	"backend/api"
	"backend/middleware"
	"os"

	"github.com/gin-gonic/gin"
)

const (
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

// NewRouter 路由配置
func NewRouter() *gin.Engine {
	r := gin.Default()

	// 中间件, 顺序不能改
	r.Use(middleware.Session(os.Getenv("SESSION_SECRET")))
	r.Use(middleware.Cors())
	r.Use(middleware.CurrentUser())

	// 路由
	v1 := r.Group("/api/v1")
	{
		v1.POST("ping", api.Ping)

		// 用户登录
		v1.POST("signup", api.UserRegister)

		// 用户登录
		v1.POST("login", api.UserLogin)

		v1.GET("discussion/list", api.DiscussionList)

		// 需要登录保护的
		auth := v1.Group("")
		auth.Use(middleware.LoginRequired())
		{
			// User Routing
			auth.GET("user/me", api.UserMe)
			auth.DELETE("logout", api.UserLogout)

			auth.GET("discussion/detail/:id", api.DiscussionDetail)

			auth.GET("discussion/member/sum/:id", api.DiscussionMemberSum)

			auth.POST("secretary/message/send", api.SecretorySendMessage)
			auth.GET("member/list", api.MemberList)

			auth.POST("chairman/message/send", api.ChairmanSendMessage)
			auth.GET("sum", api.UserSum)
		}
	}
	return r
}
