// use the map() function to transform an array of products into an array of <li> items:

const myList = [{title: 'item1', id: 1},
    {title: 'item2', id: 2},
    {title: 'item3', id: 3}
];

export default function MyList(){
    const listItems = myList.map(item =>
        <li key = {item.id}>
            {item.title}
        </li>
        );
    
    return (
            <ul>{listItems}</ul>
        );
}
