     ��� ������ � ������:
* ���������� accounts:
	o RegisterAPI � api ��� �����������
	o LoginAPI � api ��� �����������
	o UserAPI � api ��� ��������� ������ ������������ (�������� ������, ���� �����������)
* ���������� frontend:
	����� ����� �������� (��� �� �������), ���������� �� react redux.

��� ���������:
	1. ������ PostgreSQL v.12.2
	2. ������ ����
	3. ��������� �������, ��������� � ��������� ����������� -> StaskNew
	4. ��������� �������:
		1)  python manager.py makemigrations
		2) python manage.py migrate
		3) python manage.py runserver
	5. ���� ���������� �� ������ http://localhost:8000/
     
     ��� �������� API:
     ������ postman
	 
     �������� RegisterAPI:
	1) ������� POST ������ �� ����� http://localhost:8000/api/auth/register
	2) �� ������� Headers ��������� KEY � Content-Type. VALUE � application/json
	3) �� ������� Body ������ ������ raw.
	4) ������� json ������:
	{
 	"email": "zxcv@zxcv.ru",        // email ������������
 	"username": "zcxv",                 // ������� ������������
 	"first_name": "Ivan",               // ���
 	"last_name": "Ivanov",            // �������
 	"patronymic": "Ivanovich",     // ��������
 	"password": "123456"             // ������
	}	5) ���������� ������

     �������� LoginAPI:
	1) ������� POST ������ �� ����� http://localhost:8000/api/auth/login
	2) �� ������� Headers ��������� KEY � Content-Type. VALUE � application/json
	3) �� ������� Body ������ ������ raw.
	4) ������� json ������:
	{
	"email": "zxcv@zxcv.ru",
	"password": "123456"
	}	5) ���������� ������
     
     �������� UserAPI:
	1) ������� GET ������ �� ����� http://localhost:8000/api/auth/user
	2) �� ������� Headers ��������� KEY � Authorization. VALUE � Token [�����, ������� �������� ��� �����������]
	3) ���������� ������
	4) ���� ����� ������, �������� ���������� � ����������� ������������

     �������� Logout:
	1) ������� POST ������ �� ����� http://localhost:8000/api/auth/logout
	2) �� ������� Headers ��������� KEY � Authorization. VALUE � Token [�����, ������������, �������� ����� �����������������]
	3) ���������� ������
	4) ���� ����� ������, ������ �� ��������. �� ������� ������ ������ ������ ����� �������� ���������� � ������������ �������� ������ ��������������
     
