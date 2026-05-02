function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

/*----------�w�b�_�[�摜----------*/

function RundamImg()
{
	picture_num=12;
	rnd = Math.ceil(Math.random() * picture_num);
	document.write('<img src="/official/kof-mi-ra-plus/common/hed' + rnd + '.jpg" alt="KOF�}�L�V�}���C���p�N�g���M�����[�V����A ���݃T�C�g" width="902" height="86" border="0" usemap="#Map">');
	document.write('<map name="Map"><area shape="rect" coords="1,1,496,84" href="index.html"></map>');
	
}

/*�M�������[�@�|�b�v�A�b�v�@�g��摜*/
function gallery1(winname)
{
newWindow =window.open("/official/kof-mi-ra-plus/gallery/"+winname,"winGallery","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=no,width=950,height=650");
newWindow.focus();
}

/*�M�������[�@�|�b�v�A�b�v2�@other color*/
function gallery2(winname)
{
newWindow =window.open("/official/kof-mi-ra-plus/gallery/design/pop/"+winname,"winGallery2","toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=no,width=880,height=650");
newWindow.focus();
}

/*�T�C�h�X�g�[���[�@�|�b�v�A�b�v*/
function story(winname)
{
newWindow =window.open("/official/kof-mi-ra-plus/story/"+winname,"winStory","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=677,height=700");
newWindow.focus();
}




