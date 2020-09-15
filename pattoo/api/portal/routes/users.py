"""Routes for users."""

# Flask imports
from flask import Blueprint
from flask import request, session

# Pattoo imports
from pattoo.db import db
from pattoo.db.models import User as UserModel

# Import server resources
# from .forms import AddUserForm

# Define the AGENTS global variable
USERS = Blueprint('USERS', __name__)

@USERS.route('/api/user', methods=['GET'])
def user():
    """User route.
    
    Args:
        None

    Returns:
        response (dict): Response Message

    """
    # Check if a user was stored in session first
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        # Block access if no user was found in session
        return response

    enable = request.args.get('enable', type=int)
    user_id = request.args.get('user', type=int)
    if enable is not None and user_id is not None:
        # Toggle enable value of enable sent from request
        change_enable = 1 if (enable == 0) else 0
        response = {'data': {'user_id': user_id, 'enable': change_enable, 'message': 'Not changed'}}
        with db.db_modify(20185, die=True) as db_session:
            # Change enable status of user
            db_session.query(UserModel).filter(
                UserModel.idx_user == user_id
            ).update({'enabled': change_enable})
            response = {'data': {'user_id': user_id, 'enable': change_enable, 'message': 'Changed'}}
        return response
    
    response = {'data':{'message': 'Query did not run'}}
    with db.db_query(20186, close=False) as db_session:
        users = db_session.query(UserModel).order_by(UserModel.idx_user).all()
        pp_users = []
        for user in users:
            # Get all users available in list from User model
            pp_users+= [
                {
                    "idx_user": user.idx_user, "first_name": (user.first_name).decode(),
                    "last_name": (user.last_name).decode(),
                    "username": (user.username).decode(), "role": user.role,
                    "enabled": user.enabled
                }
            ]
        response = {'data':{'users': pp_users, 'message': 'Query ran'}}
    return response


# @PANEL.route('/adduser', methods=['GET', 'POST'])
# def adduser():
#    """Add user.

#    Args:
#        None

#    Returns:
#        None

#    """
#    addUserF = AddUserForm()

#    if request.method == 'POST' and addUserF.validate_on_submit():
#        firstname = request.form['firstname']
#        lastname = request.form['lastname']
#        username = request.form['username']
#        password = request.form['password']
#        enabled = request.form['enabled']

#        # with db.db_modify(20156, close=False) as db_session:


#    return render_template('adduser.html', form=addUserF)
