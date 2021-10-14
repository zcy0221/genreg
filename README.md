在终端以正确的格式运行main.js文件(node main.js -i xxx.json -d ./xx/xx -o xxx.svg),可见运行截图。
终端运行语句，将“-i”后的路径传给input.js，input从路径找到相应文件读取json数据，并传递给render.js绘制寄存器图，“-d”后的保存路径可新建，
最后“-o”后给存取文件命名，传递给output.js输出svg图，文件夹批量生成svg图可不需写“-o”。