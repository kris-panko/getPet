NextEx is a simple dating app that matches users based on the compatibility of their astrological sign. 

Users will be able to: 
- Create a user profile
- Retrieve matches based on astrological sign
- Update account (description, photos, drop down choices)
- View matches in a match bar
- Delete your account when you’ve found your next ex!

Stretch goals:
Match users also based on location
Allow users to link their social media profiles
Integrate a feature that suggests dates based on location

Domain Model: 
![Screenshot 2023-10-26 at 10 39 09 AM](https://github.com/kristi-panko-flatiron/NextEx/assets/136921157/f8b30ab4-0297-4ebb-bee9-fabb41e3d666)

Wireframe:
![Screenshot 2023-10-26 at 10 42 28 AM](https://github.com/kristi-panko-flatiron/NextEx/assets/136921157/54c57dfe-01ad-4a46-8cd3-7373eddf0687)

Relationships:
A user can have one astrological sign (one-to-one relationship).
A user can have multiple matches (one-to-many relationship).
AstrologicalSign Table:
An astrological sign can be associated with multiple users (one-to-many relationship).
Each astrological sign has a set of best matches associated with it (one-to-one relationship with AstrologicalCompatibility).
UserMatch Table (Intermediary Table):
Records the matches between users. It establishes a many-to-many relationship between users.
Match Table:
Represents the matches between users. Records the date of the match.
Maintains a record of user matches through the UserMatch table.
AstrologicalCompatibility Table:
Stores information about the best matches for each astrological sign.
Each astrological sign can be associated with multiple best matches, forming a one-to-many relationship.


