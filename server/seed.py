#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Pet, Adoption, Favorite

if __name__ == "__main__":
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        # This will delete any existing rows
        # so you can run the seed file multiple times without having duplicate entries in your database
        print("Deleting data...")
        Pet.query.delete()
        User.query.delete()
        Adoption.query.delete()
        Favorite.query.delete()
        # db.create_all()

        print("Creating pets...")
        pet1 = Pet(name="Bang Kitty", breed="American Shorthair", type="Cat", image=" ")
        pet2 = Pet(
            name="Stuart",
            breed="Annoyoying",
            type="Rat",
            image="https://pbs.twimg.com/media/FPgA0D7XEAAtzr4.jpg",
        )
        pet3 = Pet(
            name="Lil King Trashmouth",
            breed="North American Raccoon",
            type="Raccoon",
            image="https://sdzwildlifeexplorers.org/sites/default/files/2020-10/racoon-02.jpg",
        )
        pet4 = Pet(
            name="DOOfus",
            breed="Wiener",
            type="Dog",
            image="https://i.kym-cdn.com/photos/images/masonry/002/304/541/b96.gif",
        )
        pet5 = Pet(
            name="Whiskers",
            breed="Siamese",
            type="Cat",
            image="https://as2.ftcdn.net/v2/jpg/02/15/27/05/1000_F_215270591_uQ86TM2a1jAaPPg6Yds4DlK9gH7zc2AM.jpg",
        )
        pet6 = Pet(
            name="Whiskers",
            breed="Siamese",
            type="Cat",
            image="https://as2.ftcdn.net/v2/jpg/02/15/27/05/1000_F_215270591_uQ86TM2a1jAaPPg6Yds4DlK9gH7zc2AM.jpg",
        )
        pet7 = Pet(
            name="Sam",
            breed="African Grey",
            type="Parrot",
            image="https://images.saymedia-content.com/.image/t_share/MTc0MjU4Nzg3OTAzODc0NTU2/parrots-as-pets-african-grey-parrot.jpg",
        )
        pet8 = Pet(
            name="Peter",
            breed="Holland Lop",
            type="Rabbit",
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Holland_lop_rabbit.jpg/2560px-Holland_lop_rabbit.jpg",
        )
        pet9 = Pet(
            name="G-Force",
            breed="Abyssinian",
            type="Guinea Pig",
            image="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/abyssinian-guinea-pig-portrait-loren-dowding.jpg",
        )
        pet10 = Pet(
            name="Fluffykins",
            breed="Cotton Candy Poodle",
            type="Dog",
            image="https://i.pinimg.com/originals/ff/bc/4c/ffbc4c30e076c712ea12517175b8094a.jpg",
        )

        pet11 = Pet(
            name="Whiskerpuff",
            breed="Marshmallow Kitty",
            type="Cat",
            image="https://i.etsystatic.com/5184334/r/il/f95200/3610737053/il_fullxfull.3610737053_5uc0.jpg",
        )

        pet12 = Pet(
            name="Snailbert",
            breed="Turbo Snail",
            type="Snail",
            image="https://live.staticflickr.com/7045/8689332889_583ed4b36e_b.jpg",
        )

        pet13 = Pet(
            name="Squeaky",
            breed="American Pekin",
            type="Duck",
            image="https://i.pinimg.com/550x/72/07/28/720728b8aab3e11b68f10da5a6a4aa79.jpg",
        )

        pet14 = Pet(
            name="FireFly",
            breed="You would not believe your eyes",
            type="Owl City",
            image="https://i.redd.it/ttwt6ubfzyb21.jpg",
        )

        pet15 = Pet(
            name="Taco",
            breed="Crested Gecko",
            type="Gecko",
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Crested_gecko_-_1.jpg/800px-Crested_gecko_-_1.jpg",
        )

        pet16 = Pet(
            name="Bark Vader",
            breed="Space Pug",
            type="Dog",
            image="https://media.graphassets.com/resize=height:360,width:500/output=format:webp/ofnKLci5TJWyUifJsKF2",
        )

        pet17 = Pet(
            name="Smokey",
            breed="Scottish Fold",
            type="Cat",
            image="https://d128mjo55rz53e.cloudfront.net/media/images/blog-breed-scottish_fold_2.max-400x400.format-jpeg.jpg",
        )

        pet18 = Pet(
            name="Molasses",
            breed="Lazy Sloth",
            type="Sloth",
            image="https://i.natgeofe.com/k/bf5eb6bf-286a-432e-a8a5-9fceb9215234/sloth-branch-hanging_square.jpg",
        )

        pet19 = Pet(
            name="Shorty",
            breed="Angolan",
            type="Giraffe",
            image="https://www.naplesnews.com/gcdn/presto/2022/08/06/PNDN/1c339bd9-77e5-4937-abed-3ab101a3693e-Timber_giraffe.jpeg",
        )

        pet20 = Pet(
            name="Travis",
            breed="Astro",
            type="Fish",
            image="https://media.tenor.com/bwkZTI0fuukAAAAC/travis-scott-fish.gif",
        )

        pets = [pet1, pet2, pet3, pet4]

        print("Creating users...")

        user1 = User(name="Emma", username="Firstwright", password="123badpass")
        user2 = User(name="Geri", username="Holloway", password="51^$23618*)")
        user3 = User(name="Nial Johnson", username="Nilo", password="mtpass1")
        users = [user1, user2, user3]
        db.session.add_all(pets)
        db.session.add_all(users)
        db.session.commit()
        print("Creating adoptions")

        adopt1 = Adoption(user_id=1, pet_id=1)
        adopt2 = Adoption(user_id=2, pet_id=2)
        adopt3 = Adoption(user_id=3, pet_id=3)
        fav1 = Favorite(user_id=1, pet_id=1)
        fav2 = Favorite(user_id=2, pet_id=2)
        fav3 = Favorite(user_id=3, pet_id=3)
        adoptions = [adopt1, adopt2, adopt3]
        favorites = [fav1, fav2, fav3]
        db.session.add_all(adoptions)
        db.session.add_all(favorites)
        db.session.commit()

        print("Seeding done!")  # Empty tables
