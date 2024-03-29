FROM ubuntu:16.04

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app
RUN apt-get install -y libmysqlclient-dev python-dev
RUN apt-get install python-dnspython
RUN pip install -r requirements.txt

COPY . /app


ENTRYPOINT [ "python" ]

CMD [ "main.py" ]


