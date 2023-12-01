// You can respond to events by declaring event handler functions inside your components.

// onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.

function MyButton(){

    function handleClick() {
        alert('Hello World');
    }

    return (
        <button onClick={handleClick}>Buttton</button>
    );
}

export default MyButton;