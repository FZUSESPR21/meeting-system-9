package util

import "math"

const (
	// PageMaxSize 列表单页条数
	PageMaxSize = 15

	PageCountError = -1
)

func PageOverFlow(total int64, page int64) bool {
	return int64(math.Ceil(float64(total) / float64(PageMaxSize))) < page || page <= 0
}

func TotalPages(total int64) int64 {
	if total %PageMaxSize != 0 {
		return total /PageMaxSize + 1
	} else {
		return total / PageMaxSize
	}
}