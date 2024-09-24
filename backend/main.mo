import Char "mo:base/Char";

import Text "mo:base/Text";
import Nat "mo:base/Nat";

actor DoomFansite {
    stable var visitorCount : Nat = 0;

    public func incrementVisitorCount() : async Nat {
        visitorCount += 1;
        visitorCount
    };

    public query func getVisitorCount() : async Nat {
        visitorCount
    };

    public query func getDoomHistory() : async Text {
        "Doom is a groundbreaking first-person shooter game developed by id Software and released in 1993. It revolutionized the gaming industry with its immersive 3D graphics, multiplayer capabilities, and modding support. The game's success spawned numerous sequels, spin-offs, and a dedicated fan community that continues to thrive today."
    };

    public query func getDoomGames() : async [Text] {
        [
            "Doom (1993)",
            "Doom II: Hell on Earth (1994)",
            "Final Doom (1996)",
            "Doom 64 (1997)",
            "Doom 3 (2004)",
            "Doom (2016)",
            "Doom Eternal (2020)"
        ]
    };

    public query func getDoomCharacters() : async [(Text, Text)] {
        [
            ("Doomguy", "The unnamed space marine protagonist of the Doom series."),
            ("Cyberdemon", "A massive demon with cybernetic enhancements and a rocket launcher for an arm."),
            ("Cacodemon", "A floating, one-eyed demon that spits fireballs."),
            ("Imp", "A common demon enemy that throws fireballs and can climb walls."),
            ("Baron of Hell", "A large, goat-legged demon with powerful melee attacks and fireball projectiles.")
        ]
    };
}
