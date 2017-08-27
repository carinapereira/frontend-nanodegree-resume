var bio = {
	"name" : "Carina dos Santos Pereira",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "(54) 991603434",
		"email": "carinadossantospereira@gmail.com",
		"github": "carinapereira",
		"twitter": "@CarinaP72487403",
		"location": "Caxias do Sul"
	},
	"welcomeMessage" : "Sejam bem-vido",
	"skills": [
		"HTML", "CSS", "Javascript", "Objective - C", "Swift", "IOS", "Android", "Delphi", "C#", "ASP", ".NET", "PLSQL", "Forms - Reports", "VB"
	],
	"bioPic": "images/carina.jpg"
}

var education = {
	"schools": [
		{
			"name" : "Faculdade Decision - Instituto Infnet",
			"city" : "Porto Alegre, RS - Brasil",
			"majors" : "Pós-Graduação MIT em Desenvolvimento Mobile",
			"dates": 2018, 
			"url": "http://www.faculdadedecision.edu.br/infnet/" 
		},
		{
			"name" : "FTEC",
			"city" : "Caxias do Sul, RS - Brasil",
			"majors" : "Tecnólogo em Análise e Desenvolvimento de Sistemas",
			"dates": 2013, 
			"url": "https://www.ftec.com.br/"   
		}
		,
		{
			"name" : "FTEC",
			"city" : "Caxias do Sul, RS - Brasil",
			"majors" : "Técnico em Informática. ",
			"dates": 2010, 
			"url": "https://www.ftec.com.br/"   
		}
	],
	"onlineCourses" : [
		{
			"title" : "teste",
			"school" : "teste",
			"dates" : 2017,
			"url": "www.teste.com.br"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Softbyte Sistemas de Gestão",
			"title": "Desenvolvedor de Sistemas",
			"dates" : "01/04/2014 - 20/03/2017",
			"description" : "Atuei na equipe de desenvolvimento, trabalhando com o modelo ágil Scrum. Participava de todas as etapas do desenvolvimento do projeto, análise, programação e teste. Durante o período que integrei à equipe, pude participar de uma nova evolução do produto, onde iniciamos gradualmente a migração da linguagem VB para C#, implementado uma integração entre as duas linguagens, o que permitiu continuarmos utilizando o sistema sem nenhum impacto para o usuário, ao mesmo tempo que evoluímos a tecnologia. Tecnologias trabalhadas: Scrum, VB, C#, Web API, XML, JSON, SQL-Server, PostgreSQL. ",
		},
		{
			"employer" : "FOCCO Sistema de Gestão",
			"title": "Programador de Sistemas",
			"dates" : "07/11/2011 - 20/03/2014",
			"description" : "Durante o período que integrei a equipe de customização dessa empresa, adquiri experiência em trabalhar em grandes projetos, trabalhando com uma equipe composta por gerente de projeto, analista de negócio, analista de sistema e cronogramas de desenvolvimento, o que contribuiu para a minha evolução profissional. Adquiri conhecimentos nas áreas de manufatura, comercial e suprimentos. Tecnologias trabalhadas: Forms, Reports, PL-SQL e banco de dados Oracle. ",
		},
		{
			"employer" : "TCS Sistemas",
			"title": "Programador de Sistemas",
			"dates" : "06/08/2009 - 27/11/2011",
			"description" : "O período que trabalhei nesta empresa, participei do desenvolvimento da Nota Fiscal Eletrônica versão 2.0, o que contribuiu muito no meu aprendizado na comunicação com Web Service, XML e regras gerais de impostos, esse sistema foi implementado na linguagem C# e ASP.NET. Trabalhei também na manutenção de um sistema de gestão pra lojas de varejo e comércio em geral, desenvolvido em Dephi e banco de dados Firebird. Tecnologias trabalhadas: Delphi, C#, ASP.NET, XML, banco de dados Firebird.",
		}
	]
}


if (bio != null){
	var formattedName =  HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	var formattedPic = HTMLbioPic.replace("%data%", "images/carina.jpg");
	$("#header").append(formattedPic);
}


for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	//acrescenta no ultimo elemento da classe work-entry
	$(".work-entry:last").append(formattedEmployerTitle);
}
