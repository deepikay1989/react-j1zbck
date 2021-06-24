import React, { useState, useEffect } from 'react';

const PostList = () => {
  
  const [Posts, setPosts] = useState([{
    "userId": 1,
    "id": 1,
    "title": "Thirsty Crow",
    "body": "One hot day, a thirsty crow flew all over the fields looking for water. For a long time, he could not find any. He felt very weak, almost lost all hope. Suddenly, he saw a water jug below the tree. He flew straight down to see if there was any water inside. Yes, he could see some water inside the jug.\nThe crow tried to push his head into the jug. Sadly, he found that the neck of the jug was too narrow. Then he tried to push the jug to tilt for the water to flow out, but the jug was too heavy.\nThe crow thought hard for a while. Then, looking around it, he saw some pebbles. He suddenly had a good idea. He started picking up the pebbles one by one, dropping each into the jug. As more and more pebbles filled the jug, the water level kept rising. Soon it was high enough for the crow to drink. His plan had worked! The crow drank the water happily and flew in the sky singing his favourite song"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "The Woodcutter and the Axe",
    "body": "Long ago, there lived a woodcutter in a small village. He was sincere in his work and very honest. Every day, he went into the nearby forest to cut trees. He brought the woods back into the village and sold them to a merchant and earned his money. He earned just enough to make a living, and he was satisfied with his simple living.\nOne day, while cutting a tree near a river, his axe slipped out of his hand and fell into the river. The river was so deep, he could not take it on his own. He had only one axe that fell into the river. He started to worry. He will not be able to earn his living now! He was very sad and prayed to the God. He prayed sincerely and God appeared in front of him and asked, “What is the problem, my son?” The woodcutter explained the problem and requested the God to get his axe back.\nThe God stretched his hand deep into the river and took out a silver axe and asked, “Is this your axe?” The Woodcutter looked at the axe and said “No”. So, the God put his hand back deep into the water again and took a golden axe and asked, “Is this your axe?” The woodcutter looked at the axe and said “No”. The God said, “Take a look at it again Son, this is a very valuable golden axe. Are you sure, this is not yours?” The woodcutter said, “No, It’s not mine. I cannot cut trees with a golden axe. It’s not useful to me”.\nThe God smiled and finally put his hand into the water again and took out his iron axe and asked, “Is this your axe?” To this, the woodcutter said, “Yes! This is mine! Thank you!” The God was very impressed with his honesty and she gave him his iron axe and also the other two axes as a reward for his honesty."
  }]);
  
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((data)=>data.json())
  //   .then(data => setPosts(data))
  // }, []);
  const handleClick = (a)=> {console.log(a.body)}
  return (
    <div>
      <p>
      <ul>
        {Posts.map(a => {
          return <li onClick={()=>{handleClick(a)}}>{a.title}</li>;
        })}
        </ul>
      </p>
    </div>
  );
};

export default PostList;
