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
}
