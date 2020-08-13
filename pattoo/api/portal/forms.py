from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, PasswordField, IntegerField
from wtforms.validators import DataRequired, Email

class LoginForm(FlaskForm):
    """Form for user login."""
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])