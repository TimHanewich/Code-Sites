export interface StateFact {
  state: string;
  capital: string;
  nickname: string;
  fact: string;
}

export const statesData: StateFact[] = [
  { state: "Alabama", capital: "Montgomery", nickname: "The Yellowhammer State", fact: "Alabama was the first state to declare Christmas a legal holiday in 1836." },
  { state: "Alaska", capital: "Juneau", nickname: "The Last Frontier", fact: "Alaska has more coastline than all other U.S. states combined." },
  { state: "Arizona", capital: "Phoenix", nickname: "The Grand Canyon State", fact: "The Grand Canyon is over a mile deep and up to 18 miles wide." },
  { state: "Arkansas", capital: "Little Rock", nickname: "The Natural State", fact: "Arkansas is the only U.S. state that actively mines diamonds." },
  { state: "California", capital: "Sacramento", nickname: "The Golden State", fact: "California's economy is larger than that of most countries in the world." },
  { state: "Colorado", capital: "Denver", nickname: "The Centennial State", fact: "Colorado has the highest average elevation of any U.S. state at 6,800 feet." },
  { state: "Connecticut", capital: "Hartford", nickname: "The Constitution State", fact: "The first telephone book ever issued contained only 50 names and was published in New Haven in 1878." },
  { state: "Delaware", capital: "Dover", nickname: "The First State", fact: "Delaware was the first state to ratify the U.S. Constitution on December 7, 1787." },
  { state: "Florida", capital: "Tallahassee", nickname: "The Sunshine State", fact: "St. Augustine, Florida, founded in 1565, is the oldest continuously occupied European settlement in the U.S." },
  { state: "Georgia", capital: "Atlanta", nickname: "The Peach State", fact: "Georgia is the largest state east of the Mississippi River." },
  { state: "Hawaii", capital: "Honolulu", nickname: "The Aloha State", fact: "Hawaii is the only U.S. state that grows coffee commercially." },
  { state: "Idaho", capital: "Boise", nickname: "The Gem State", fact: "Idaho produces about one-third of all potatoes grown in the United States." },
  { state: "Illinois", capital: "Springfield", nickname: "The Prairie State", fact: "Chicago's reversal of the Chicago River in 1900 is considered one of the greatest engineering feats in history." },
  { state: "Indiana", capital: "Indianapolis", nickname: "The Hoosier State", fact: "The Indianapolis 500 is the largest single-day sporting event in the world by attendance." },
  { state: "Iowa", capital: "Des Moines", nickname: "The Hawkeye State", fact: "Iowa produces more corn and hogs than any other state." },
  { state: "Kansas", capital: "Topeka", nickname: "The Sunflower State", fact: "Dodge City, Kansas, is the windiest city in the United States." },
  { state: "Kentucky", capital: "Frankfort", nickname: "The Bluegrass State", fact: "Fort Knox holds roughly 4,580 tons of gold bullion, about half of the U.S. Treasury's stored gold." },
  { state: "Louisiana", capital: "Baton Rouge", nickname: "The Pelican State", fact: "Louisiana is the only state that uses parishes instead of counties for local government." },
  { state: "Maine", capital: "Augusta", nickname: "The Pine Tree State", fact: "Maine produces about 99% of all blueberries in the United States." },
  { state: "Maryland", capital: "Annapolis", nickname: "The Old Line State", fact: "The U.S. National Anthem was written in Baltimore during the War of 1812." },
  { state: "Massachusetts", capital: "Boston", nickname: "The Bay State", fact: "The first subway system in America opened in Boston in 1897." },
  { state: "Michigan", capital: "Lansing", nickname: "The Great Lakes State", fact: "Michigan touches four of the five Great Lakes and has over 11,000 inland lakes." },
  { state: "Minnesota", capital: "Saint Paul", nickname: "The North Star State", fact: "Minnesota has more than 10,000 lakes, earning its famous nickname 'Land of 10,000 Lakes.'" },
  { state: "Mississippi", capital: "Jackson", nickname: "The Magnolia State", fact: "The Mississippi River is the largest river system in North America at 2,340 miles long." },
  { state: "Missouri", capital: "Jefferson City", nickname: "The Show-Me State", fact: "The Gateway Arch in St. Louis is the tallest man-made monument in the United States at 630 feet." },
  { state: "Montana", capital: "Helena", nickname: "The Treasure State", fact: "Montana has the largest migratory elk herd in the nation." },
  { state: "Nebraska", capital: "Lincoln", nickname: "The Cornhusker State", fact: "Nebraska is the only state with a unicameral (single-chamber) legislature." },
  { state: "Nevada", capital: "Carson City", nickname: "The Silver State", fact: "Nevada is the driest state in the U.S., receiving an average of only about 9 inches of rain per year." },
  { state: "New Hampshire", capital: "Concord", nickname: "The Granite State", fact: "New Hampshire was the first state to have its own state constitution." },
  { state: "New Jersey", capital: "Trenton", nickname: "The Garden State", fact: "New Jersey is the most densely populated state in the U.S." },
  { state: "New Mexico", capital: "Santa Fe", nickname: "The Land of Enchantment", fact: "Santa Fe, founded in 1610, is the oldest capital city in the United States." },
  { state: "New York", capital: "Albany", nickname: "The Empire State", fact: "New York City's Central Park is larger than the entire country of Monaco." },
  { state: "North Carolina", capital: "Raleigh", nickname: "The Tar Heel State", fact: "The Wright Brothers made the first powered airplane flight at Kitty Hawk, North Carolina, in 1903." },
  { state: "North Dakota", capital: "Bismarck", nickname: "The Peace Garden State", fact: "North Dakota produces more sunflowers than any other state." },
  { state: "Ohio", capital: "Columbus", nickname: "The Buckeye State", fact: "Ohio has produced more U.S. presidents than any other state except Virginia — seven in total." },
  { state: "Oklahoma", capital: "Oklahoma City", nickname: "The Sooner State", fact: "Oklahoma has more man-made lakes than any other state, with over 200." },
  { state: "Oregon", capital: "Salem", nickname: "The Beaver State", fact: "Crater Lake in Oregon is the deepest lake in the United States at 1,943 feet." },
  { state: "Pennsylvania", capital: "Harrisburg", nickname: "The Keystone State", fact: "The first computer, ENIAC, was built at the University of Pennsylvania in 1946." },
  { state: "Rhode Island", capital: "Providence", nickname: "The Ocean State", fact: "Rhode Island is the smallest U.S. state but has the longest official name: 'State of Rhode Island.'" },
  { state: "South Carolina", capital: "Columbia", nickname: "The Palmetto State", fact: "South Carolina was the first state to secede from the Union in 1860." },
  { state: "South Dakota", capital: "Pierre", nickname: "The Mount Rushmore State", fact: "Mount Rushmore's four presidential faces are each about 60 feet tall." },
  { state: "Tennessee", capital: "Nashville", nickname: "The Volunteer State", fact: "Nashville is known as 'Music City' and is home to the Grand Ole Opry, the longest-running radio show in U.S. history." },
  { state: "Texas", capital: "Austin", nickname: "The Lone Star State", fact: "Texas is the only state to have the flags of six different nations fly over it." },
  { state: "Utah", capital: "Salt Lake City", nickname: "The Beehive State", fact: "Utah's Great Salt Lake is the largest saltwater lake in the Western Hemisphere." },
  { state: "Vermont", capital: "Montpelier", nickname: "The Green Mountain State", fact: "Vermont produces more maple syrup than any other state, about 50% of the U.S. supply." },
  { state: "Virginia", capital: "Richmond", nickname: "The Old Dominion", fact: "Eight U.S. presidents were born in Virginia, more than any other state." },
  { state: "Washington", capital: "Olympia", nickname: "The Evergreen State", fact: "Washington state produces more apples than any other state in the U.S." },
  { state: "West Virginia", capital: "Charleston", nickname: "The Mountain State", fact: "West Virginia is the only state entirely within the Appalachian Mountain region." },
  { state: "Wisconsin", capital: "Madison", nickname: "The Badger State", fact: "Wisconsin produces more cheese than any other state — over 3 billion pounds per year." },
  { state: "Wyoming", capital: "Cheyenne", nickname: "The Equality State", fact: "Wyoming was the first territory to grant women the right to vote in 1869." },
];

export function getRandomFact(): StateFact {
  return statesData[Math.floor(Math.random() * statesData.length)];
}
