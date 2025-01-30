import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';

function PostsPage() {

  let posts = [
    {
      id: 1,
      title: "The Best Time to Fish: Unlocking the Secrets of Seasonal Patterns",
      body: "The best time to fish depends largely on the season and the species you're targeting. In spring, fish like bass and trout are actively feeding and spawning, so early mornings and late evenings are prime times. Summer requires deeper, cooler water for species like walleye and catfish, with early mornings or late evenings being ideal. Fall is a feeding frenzy as fish bulk up for winter, and mid-morning to early afternoon can be especially productive for salmon and crappie. Understanding seasonal patterns helps maximize your chances of a successful catch, so keep an eye on water temperature and weather conditions to time your outings just right.",
      image: "image"
    },
    {
      id: 2,
      title: "How to Read Water: Understanding the Importance of Water Conditions in Fishing",
      body: "Reading the water is crucial for successful fishing, as fish behavior is highly influenced by conditions like water temperature, clarity, and movement. In clear water, fish are often more cautious, so using lighter lures and presenting them slowly can work best. In moving water, fish tend to hide behind structures like rocks or logs, while in still water, deeper areas or drop-offs are key spots. Wind can push baitfish into certain areas, and understanding moon phases can also give you an edge, especially in coastal fishing. By reading the water properly, you can pinpoint where fish are likely to be, improving your chances of a good catch.",
      image: "image"
    },
    {
      id: 3,
      title: "Essential Fishing Gear: What Every Angler Should Have in Their Tackle Box",
      body: "A well-stocked tackle box is essential for any fisherman, and it starts with a variety of hooks, fishing lines, and lures to match the species and conditions. You'll also need a reliable rod and reel setup, and don't forget tools like pliers, scissors, and a landing net. With these basics in hand, you're ready for most fishing situations. Keeping your gear organized and regularly checking for wear and tear ensures you're prepared for whatever the water throws at you, making it easier to reel in your catch without frustration.",
      image: "image"
    }
  ]
  return (
  <div>
    <PostsNew />
    <PostsIndex posts = {posts}/>
  </div>
  )
}