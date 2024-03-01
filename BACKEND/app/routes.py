from flask import jsonify
from marshmallow import ValidationError

from app import app, jwt, api

from app.resources.user import UserRegister, UserProfileUpdate, UserLogin, UserDetailsResource, \
UserPasswordUpdateResource, UserDeleteResource
from app.resources.comment import CommentResource



api.add_resource(UserRegister, "/register")
api.add_resource(UserLogin, "/login")
api.add_resource(UserDetailsResource, "/user-details/<int:user_id>")
api.add_resource(UserPasswordUpdateResource, "/update-password")
api.add_resource(UserDeleteResource, "/user-delete/<int:user_id>")
api.add_resource(CommentResource, "/create_comment")
api.add_resource(UserProfileUpdate, "/user-profile")




@app.route('/')
@app.route('/index')
def index():
    return 'This is my first flask project!!'