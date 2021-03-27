package api

import (
	"backend/service"
	"github.com/gin-gonic/gin"
	"strconv"
)

//DiscussionList 注册时展示分论坛列表
func DiscussionList(c *gin.Context) {
	var service service.ShowDiscussionService
	if err := c.ShouldBind(&service); err == nil {
		res := service.ShowDiscussionOnSignUp()
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

// DiscussionDetail 分论坛详情
func DiscussionDetail(c *gin.Context) {
	var service service.ShowDiscussionService
	i := c.Param("id")
	if id, err := strconv.Atoi(i); err != nil {
		res := service.ShowDiscussionDetail(id)
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

// SecretorySendMessage 秘书发送消息
func SecretorySendMessage(c *gin.Context) {
	var service service.SecretorySendMessageService
	if err := c.ShouldBind(&service); err == nil {
		res := service.SecretorySendMessage()
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

// ChairmanSendMessage 分会议主席发送消息
func ChairmanSendMessage(c *gin.Context) {
	var service service.ChairmanSendMessageService
	if err := c.ShouldBind(&service); err == nil {
		res := service.ChairmanSendMessage(*CurrentUser(c))
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

// DiscussionMemberSum 统计分论坛成员数
func DiscussionMemberSum(c *gin.Context) {
	var service service.ShowDiscussionService
	i := c.Param("id")
	if id, err := strconv.Atoi(i); err != nil {
		res := service.ShowDiscussionMember(id)
		c.JSON(200, res)
	} else {
		c.JSON(200, ErrorResponse(err))
	}
}

