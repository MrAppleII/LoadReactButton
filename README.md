# LoadReactButton
A smooth react button with a built in spinner

Typical usage looks like this after importing. Super simple! isLoading changes whether or not there is a spinner. 

```
 <LoadingButton
isLoading={this.state.isMenuVisible} 
onClick={this.changeVisible} >
{this.state.buttonText}
</LoadingButton>
             
```

# Props

 backgroundColor:  This sets the color of the spinner ONLY.
  buttonColor:  This sets the color of the button itself
  showLoadingIcon:  This sets if the icon is loading or not. 

