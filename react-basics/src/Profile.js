const user = {
    name: 'John Doe',
    imageUrl: 'https://images.pexels.com/photos/3882361/pexels-photo-3882361.jpeg',
    imageSize: 90
};

export default function Profile(){
    return(
        <>
        <h1>{user.name}</h1>
        
        <img classname = "author"
        src = {user.imageUrl}
        alt = {'Author'}
        style = {{width: user.imageSize,
                height:user.imageSize}}
            />    
        </>
    )
}