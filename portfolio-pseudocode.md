#watch Project click function#

```javascript
function watchProjectTab(){
  $('#projectTab').click(function(){
    alert(`you clicked on this thing`)
  }
}
````

#watch bio click function

```javascript
function watchBioTab(){
$('#bioTab').on(click)blablabla{
  changeSection();
  }
}
```

#watch contact click function#

```javascript
function watchContactTab(){
  $('#contactTab').on(click)blabla{
    ChangeSection();
  }
}
  ```

#render projects tab

```javascript
  function renderProjectsTab(){
  return`
  //whatever the content of the projects tab is
  `;
}
```
#render bio tab

```javascript
function renderBioTab(){
  return`
  //bio tab contents`;
}


```

#render Contacts Tab
```javascript
function renderContactsTab(){
  return`
  //the contents of the contacts section;
  `
}
```
#change section function#
```javascript
function changeSection(){
  if(this = projectTab){
    $('activeView').html($('#projectTab');
  }
  else if(this = contactTab){
    $('#activeView').html($('#contactTab'));
  }
  else if(this = BioTab){
    $('#activeView').html($('#bioTab'))
  }
}
```

#onLoad function(renders landing and watchforsubmit functions)
```javascript
function onLoad(){
  watchContactTab();
  watchProjectTab();
  watchBioTab();
  renderLanding();
}

```
