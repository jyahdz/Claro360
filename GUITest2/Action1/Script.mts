''-------------------------------- Test1 ---------------------------------------------------
SystemUtil.CloseProcessByName("iexplore.exe")
SystemUtil.Run "iexplore.exe", "https://www.google.com"

'Check if the search box is present
status = Browser("CreationTime:=0").Page("micclass:=Page").WebEdit("name:=q").Exist(5)

'-------------------------------- Test2 ---------------------------------------------------
SystemUtil.CloseProcessByName("iexplore.exe")
SystemUtil.Run  "iexplore.exe","https://www.yahoo.com"

'Check if the search box is present
status = Browser("CreationTime:=0").Page("micclass:=Page").WebEdit("name:=p").Exist(5)
