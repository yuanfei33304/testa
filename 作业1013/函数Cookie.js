function setCookie(name,value,n)
			{
				var d=new Date();
				d.setDate(d.getDate()+n);
				document.cookie=name+"="+value+";expires="+d+";path=/";
			}
			function getCookie(name)
			{
				var arr=document.cookie.split("; ");
				var n;
				for(var i=0;i<arr.length;i++)
				{
					if(arr[i].indexOf(name)!=-1)
					{
						n=i;
						break;
					}
				}
				if(n!=undefined)
				{
					return arr[n].split("=")[1];
				}
				
			}
			function delCookie(name,path)
			{
				var d=new Date();
				d.setDate(0);
				document.cookie=name+"=0"+";expires="+d+";path="+path;
			}
