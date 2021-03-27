package serializer

type Count struct {
	AllMember		int 	`json:"all_member"`
	NewMember		int		`json:"new_member"`
}

func BuildCount(allMember, newMember int) Count {
	var count Count
	count.AllMember = allMember
	count.NewMember = newMember
	return count
}

func BuildCountResponse(allMember, newMember int) Response {
	return Response{
		Code:  0,
		Data:  BuildCount(allMember, newMember),
		Msg:   "Success",
	}
}