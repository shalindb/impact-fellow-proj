from flask import Flask, render_template,flash, redirect
from models import *
from app import app

app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        city = request.form['city']
        jobtypes = request.form.getlist('jobtypes')
        jobs_match, jobs_rec = create_job_list(city,jobtypes)
        if jobs_match.empty and jobs_rec.empty:
            # no jobs
            flash('Sorry, no jobs found in '+city)
            return redirect(url_for('index'))
        return redirect(url_for('results',city = city, jobtypes = jobtypes, jobs_match = jobs_match, jobs_rec = jobs_rec))
    return render_template('index.html', form=search)

app.route('/results', methods=['GET'])
def show_results():
    city = request.args.get('city')
    jobtypes = request.args.get('jobtypes')
    jobs_match = request.args.get('jobs_match')
    jobs_rec = request.args.get('jobs_rec')
    return render_template('results.html', city = city, jobtypes = jobtypes, jobs_match = jobs_match, jobs_rec = jobs_rec)
