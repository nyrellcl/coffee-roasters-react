import espresso from "./assets/home/desktop/image-gran-espresso.png"
import planalto from "./assets/home/desktop/image-planalto.png"
import piccollo from "./assets/home/desktop/image-piccollo.png"
import danche from "./assets/home/desktop/image-danche.png"

import quality from "./assets/home/desktop/icon-coffee-bean.svg"
import gift from "./assets/home/desktop/icon-gift.svg"
import truck from "./assets/home/desktop/icon-truck.svg"

import australia from "./assets/about/desktop/illustration-australia.svg"
import canada from "./assets/about/desktop/illustration-canada.svg"
import uk from "./assets/about/desktop/illustration-uk.svg"

export const collectionOne ={
    collectionProduct: "Gran Espresso",
    collectionDescription: "Light and flavorful with cocoa and black pepper for an intense experience",
    alt: "Gran Espresso Product",
    img: espresso
}

export const collectionTwo = {
    collectionProduct: "Planalto",
    collectionDescription: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    img: planalto,
    alt: "Planalto Product"
}

export const collectionThree = {
    collectionProduct: "Piccollo",
    collectionDescription: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    img: piccollo,
    alt: "Piccollo Product"
}

export const collectionFour = {
    collectionProduct: "Danche",
    collectionDescription: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    img: danche,
    alt: "Danche Product"
}

export const serviceOne ={
    serviceName: "Best Quality",
    serviceDescription: "Discover an endless variety of the world's best artisan coffee from each of our roasters",
    serviceImg: quality,
    alt: "coffee bean image"
}

export const serviceTwo ={
    serviceName: "Exclusive benefits",
    serviceDescription: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    serviceImg: gift,
    alt: "gift icon"
}

export const serviceThree = {
    serviceName: "Free shipping",
    serviceDescription: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed",
    serviceImg: truck,
    alt: "truck icon"
}

export const processOne = {
    processHeading: "Pick your coffee",
    processDescription: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. there are new coffees in all profiles every month for you to try out.",
    spanNum: "01"
}

export const processTwo = {
    processHeading: "Choose the frequency",
    processDescription: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal",
    spanNum: "02"
}

export const processThree = {
    processHeading: "Receive and enjoy!",
    processDescription: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world class coffees curated to provide a distinct tasting experience.",
    spanNum: "03"
}

export const locationOne = {
    locationImg: uk,
    locationName: "United Kingdom",
    locationAddress: "68 Asfordby Rd Alcaston",
    locationRegion: "SY61YA",
    locationContact: "+44 1241 918425"
}

export const locationTwo ={
    locationImg: canada, 
    locationName: "Canada",
    locationAddress: "1528 Eglington Avenue Toronto",
    locationRegion: "Ontario M4P 1A6",
    locationContact: "+1 416 485 2997",
}

export const locationThree = {
    locationImg: australia,
    locationAddress: "36 Swanston Street Kewell",
    locationRegion: "Victoria", 
    locationName: "Australia",
    locationContact: "+61 4 9928 3629"
}

export const darkBg ={
    processBg: false
}

export const coffeeDrink = {
    preferenceHeading: "How do you drink your coffee?",
    preferenceTypeOne: "Capsule",
    preferenceDescriptionOne: "Compatible with Nespresso systems and similar brewers",
    preferenceTypeTwo: "Filter",
    preferenceDescriptionTwo: "For pour over or drip methods like Aeropress, Chemex, V60",
    preferenceTypeThree: "Espresso",
    preferenceDescriptionThree: "Dense and finely ground beans for an intense, flavorful experience.",
    coffeeId: "options",
    optionIdOne: "capsule",
    optionIdTwo: "filter",
    optionIdThree: "espresso"

}

export const coffeeType = {
    preferenceHeading: "What type of coffee?",
    preferenceTypeOne: "Single Origin",
    preferenceDescriptionOne: "Distinct, high-quality coffee from a specific family-owned farm",
    preferenceTypeTwo: "Decaf",
    preferenceDescriptionTwo: "Just like regular coffee, except the caffeine has been removed",
    preferenceTypeThree: "Blended",
    preferenceDescriptionThree: "Combination of two or three dark roasted beans of organic coffees",
    coffeeId: "bean",
    optionIdOne: "single",
    optionIdTwo: "decaf",
    optionIdThree: "blended"
}

export const coffeeAmount = {
    preferenceHeading: "How much would you like?",
    preferenceTypeOne: "250mg",
    preferenceDescriptionOne: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    preferenceTypeTwo: "500g",
    preferenceDescriptionTwo: "Perfect option for a couple. Yields about 40 delectable cups.",
    preferenceTypeThree: "1000g",
    preferenceDescriptionThree: "Perfect for offices and events. Yields about 90 delectable cups.",
    coffeeId: "quantity",
    optionIdOne: "solo",
    optionIdTwo: "couple",
    optionIdThree: "events"
}

export const coffeeGrind = {
    preferenceHeading: "Want us to grind them?",
    preferenceTypeOne: "Wholebean",
    preferenceDescriptionOne: "Best choice if you cherish the full sensory experience",
    preferenceTypeTwo: "Filter",
    preferenceDescriptionTwo: "For drip or pour-over coffee methods such as V60 or Aeropress",
    preferenceTypeThree: "Cafetiere",
    preferenceDescriptionThree: "Course ground beans specifically stuffed for french press coffee",
    coffeeId: "grind",
    optionIdOne: "wholebean",
    optionIdTwo: "filter-two",
    optionIdThree: "cafetiere"
    
}

export const coffeeDeliver = {
    preferenceHeading: "How often should we deliver?",
    preferenceTypeOne: "Every week",
    preferenceDescriptionOne: "$7.20 per shipment. Includes free first-class shipping.",
    preferenceTypeTwo: "Every 2 weeks",
    preferenceDescriptionTwo: "$9.50 per shipment. Includes free priority shipping.",
    preferenceTypeThree: "Every month",
    preferenceDescriptionThree: "$12.00 per shipment. Includes free priority shipping.",
    coffeeId: "delivery",
    optionIdOne: "week",
    optionIdTwo: "two-weeks",
    optionIdThree: "monthly"
    
}
