sudo apt-get update  #all package info

sudo apt-get install docker.io  #install docker
Y

sudo docker --version   #check docker version
sudo systemctl status docker   # shows status

sudo adduser docker-user   #create new user

sudo usermod -aG sudo docker-user   #add user to sudo superuser
sudo usermod -aG docker docker-user   #make docker the sudo

su - docker-user   #switch/work in docker-user directory



//-------------------inside docker-user-dir-------------------------------
pwd   #check current directory 
docker   #check docker commands

docker run hello-world   #create Hello World container

docker search ubuntu   #search ubuntu images
docker pull ubuntu   #download ubuntu image

docker images   #shows all reposetories/containers/images 
docker ps -all   #shows all running containers/images
docker rm <running-container-id>  #deletes unwanted reposetories/containers/images

docker run -it --name mini-ubuntu ubuntu  #create&run container(mini-ubuntu) inside ubuntu image, open ubuntu-interpreter 



---------------------------(OPTIONAL:inside mini-ubuntu interpreter)----------------------------------
ls   #shows files inside container
exit   #exits mini-ubuntu



--------------------------------back to docker-user-dir-------------------------------
docker ps -all   #shows all running containers/images

docker start mini-ubuntu   #start container



---------------------------inside mini-ubuntu container-------------------------------
docker exec -it mini-ubuntu /bin/bash   #enter terminal of container

^c ENTER ^d    # exited but did not stop

docker ps -a    #check all running containers
docker stop mini-ubuntu   #stopped mini-ubuntu container 
docker ps -a     #all running containers

docker rm mini-ubuntu   #delete container


docker search python   #check pyton images 
docker run --name mini-python-container -it python    #create python-container and enter python-interpreter, if python image doesn't exist, pull it



------------------------------inside python-interpreter-------------------------
your_code / print('---')
exit() / ^d     #exits interpreter



----------------------back to docker-user-dir-------------------------
docker ps -a   #check running containers

-------------------------create a python file anywhere in the docker-user-dir--------------------------
echo "print('type anything')" > test.py   #created a python file and inserted data
ls   #check files in current directory
cat test.py   #reads this file
-------------------------------------------------------------------------------------------------------

docker cp test.py mini-python-container:/home   #copy file and paste to python-container-home
docker start mini-python-container   #start container
docker exec -it mini-python-container python /home/test.py     #execute a command from vm to container + passed  data inside container
!!!!!!!!!!created your first containerised application with Python!!!!!!!!!!!!!!!!!

pico Dockerfile   #create picofile. make image, and run python3 command on test.py
----------------INSERT IN PICO EDITOR---------------------
FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install software-properties-common -y
RUN apt-get install python3.10 -y
ADD . /app
WORKDIR /app
CMD ["python3", "test.py"]  

^s ^x   #save picofile and exit editor
-----------------------------------------------------------


docker build -f Dockerfile . -t mini-python3-image   #build our new image mini-python3-image
docker run --name test-python3-container mini-python3-image    #run it
