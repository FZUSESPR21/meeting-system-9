package cache

import (
	"backend/util"
	"context"
	"github.com/robfig/cron/v3"
	"os"
	"strconv"
	"time"

	"github.com/go-redis/redis/v8"
)

const (
	TodayMember1 = "TM1"
	TodayMember2 = "TM2"
	TodayMember3 = "TM3"
	TodayMember4 = "TM4"
	TodayMember5 = "TM5"
	TodayMember6 = "TM6"
	TodayMember7 = "TM7"
	TodayMember8 = "TM8"
	TodayMember0 = "TM0"

	ExpireTime = (25*60-59)*time.Minute
)

// RedisClient Redis缓存客户端单例
var RedisClient *redis.Client
var ctx = context.Background()
var c = cron.New()

// Redis 在中间件中初始化redis链接
func Redis() {
	db, _ := strconv.ParseUint(os.Getenv("REDIS_DB"), 10, 64)
	client := redis.NewClient(&redis.Options{
		Addr:       os.Getenv("REDIS_ADDR"),
		Password:   os.Getenv("REDIS_PW"),
		DB:         int(db),
		MaxRetries: 1,
	})

	_, err := client.Ping(ctx).Result()

	if err != nil {
		util.Log().Panic("连接Redis不成功", err)
	}

	RedisClient = client

	SetRefresher()
}

func SetRefresher() {
	_, _ = c.AddFunc("@midnight", func() {
		RedisClient.Set(context.Background(), TodayMember1, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember2, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember3, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember4, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember5, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember6, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember7, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember8, 0, ExpireTime)
		RedisClient.Set(context.Background(), TodayMember0, 0, ExpireTime)
	})
}