import os
from django.conf import settings

from django.shortcuts import render
from react.render import render_component


def index(request):
    rendered = render_component(os.path.join(settings.BASE_DIR,
                                             'application/static/application/js/src/components/Application.jsx'))

    return render(request, 'application/index.html', {'rendered': rendered})
