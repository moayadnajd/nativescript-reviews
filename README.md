# Nativescript Reviews

### ready to use reviews box

<img src="http://codeobia.com/screenshots/reviews.png" width="300">

## Install

```
tns plugin add nativescript-reviews
```
[click here to Download fontawesome-webfont.ttf](https://github.com/moayadnajd/nativescript-fontawesome/blob/master/fonts/fontawesome-webfont.ttf) or download from [fontawesome website](http://fontawesome.io/)

* Place font icon `.ttf` file in `app/fonts`, like below:
  
```
app/fonts/fontawesome-webfont.ttf
```

### Usage
```
<UI:Reviews reviews="{{ reviews }}"  />

```

#### with more options 
```
<!-- default -->
<UI:Reviews reviews="{{ reviews }}"  />
<!-- reviews with custom date handler  -->
<UI:Reviews dateHandler="arabicDateTime" title="With date handler" reviews="{{ reviews }}" scroll="false" />
<!-- reviews with custom plugin for caching   -->
<UI:Reviews title="Image cache plugins " scroll="false" plugin="{{ plugin }}" imagetag="{{ imagetag }}" reviews="{{ reviewsWithWebImages }}" /> 
<!-- reviews with scroll inside   -->
<UI:Reviews title="Scroll inside" scroll="true" reviews="{{ lotofreviews }}" />
``` 
## refresh() this function you can triger after you get remote data 

let review = getViewById('review');
//you can do remote request or delay 
review.refresh(); // then refresh your values

## see [demo](https://github.com/moayadnajd/nativescript-reviews/tree/master/demo) for more details


| Property | Default | Description |
| --- | --- | --- |
| reviews | required | Array of reivew object {image: "~/images/icon-50.png", username: "Moayad Najdawi", review: "this is the first review", rate: 5, datetime: new Date(Date.now() - 24 * 60 * 60 * 1000)}|
| scroll | true | enable or disable scrollview inside the reviews holder |
| showHeader | true | to hide or show review title with the underline style |
| imagetag | <Image /> | the xml element of the image  so you can change it if you need to add cache plugin or something |
| plugin | empty string | plugin include statment like xmlns:IC="nativescript-web-image-cache" |
| title | reviews | the title of the reviews box |
| dateHandler | a go | you can change the date text by provide filter inside app resources see app.ts  |   
| user | event | fire on tap on user image or name return the review object  | 
