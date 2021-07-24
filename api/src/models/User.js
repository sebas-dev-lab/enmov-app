const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    phone: {
      type: String,
    },
    dni: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "moderator", "users"],
      default: "users",
    },
    location: {
      address: {
        type: String,
      },
      City: {
        type: String,
      },
      Country: {
        type: String,
      },
      geo: {
        type: [Number],
        index: {
          type: "2dsphere",
          sparse: true,
        },
      },
    },
    posts: {
      type: [Schema.Types.ObjectId],
      ref: "Post",
    },
    reviews: {
      type: [Schema.Types.ObjectId],
      ref: "Review",
    },
    image_profile: {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
    social_data: {
      facebook: {
        verify: {
          type: Boolean,
          default: false,
        },
        data: {
          id: {
            type: Number,
          },
          first_name: {
            type: String,
          },
          last_name: {
            type: String,
          },
          email: {
            type: String,
          },
        },
      },
    },
  },
  { timestamp: true }
);

userSchema.plugin(require("mongoose-autopopulate"));
const User = model("User", userSchema);

module.exports = User;
