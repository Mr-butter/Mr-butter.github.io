import gcp from "../assets/img/skills/gcp.svg";
import html from "../assets/img/skills/html.svg";
import photoshop from "../assets/img/skills/photoshop.svg";
import illustrator from "../assets/img/skills/illustrator.svg";
import docker from "../assets/img/skills/docker.svg";
import adobeXd from "../assets/img/skills/adobe-xd.svg";
import afterEffects from "../assets/img/skills/after-effects.svg";
import css from "../assets/img/skills/css.svg";
import angular from "../assets/img/skills/angular.svg";
import javascript from "../assets/img/skills/javascript.svg";
import nextJS from "../assets/img/skills/nextJS.svg";
import nuxtJS from "../assets/img/skills/nuxtJS.svg";
import react from "../assets/img/skills/react.svg";
import svelte from "../assets/img/skills/svelte.svg";
import typescript from "../assets/img/skills/typescript.svg";
import vue from "../assets/img/skills/vue.svg";
import bootstrap from "../assets/img/skills/bootstrap.svg";
import bulma from "../assets/img/skills/bulma.svg";
import capacitorjs from "../assets/img/skills/capacitorjs.svg";
import coffeescript from "../assets/img/skills/coffeescript.svg";
import memsql from "../assets/img/skills/memsql.svg";
import mongoDB from "../assets/img/skills/mongoDB.svg";
import mysql from "../assets/img/skills/mysql.svg";
import postgresql from "../assets/img/skills/postgresql.svg";
import tailwind from "../assets/img/skills/tailwind.svg";
import vitejs from "../assets/img/skills/vitejs.svg";
import vuetifyjs from "../assets/img/skills/vuetifyjs.svg";
import c from "../assets/img/skills/c.svg";
import cplusplus from "../assets/img/skills/cplusplus.svg";
import csharp from "../assets/img/skills/csharp.svg";
import dart from "../assets/img/skills/dart.svg";
import go from "../assets/img/skills/go.svg";
import java from "../assets/img/skills/java.svg";
import julia from "../assets/img/skills/julia.svg";
import kotlin from "../assets/img/skills/kotlin.svg";
import matlab from "../assets/img/skills/matlab.svg";
import php from "../assets/img/skills/php.svg";
import python from "../assets/img/skills/python.svg";
import ruby from "../assets/img/skills/ruby.svg";
import swift from "../assets/img/skills/swift.svg";
import adobeaudition from "../assets/img/skills/adobeaudition.svg";
import aws from "../assets/img/skills/aws.svg";
import deno from "../assets/img/skills/deno.svg";
import django from "../assets/img/skills/django.svg";
import firebase from "../assets/img/skills/firebase.svg";
import gimp from "../assets/img/skills/gimp.svg";
import git from "../assets/img/skills/git.svg";
import graphql from "../assets/img/skills/graphql.svg";
import lightroom from "../assets/img/skills/lightroom.svg";
import materialui from "../assets/img/skills/materialui.svg";
import nginx from "../assets/img/skills/nginx.svg";
import numpy from "../assets/img/skills/numpy.svg";
import opencv from "../assets/img/skills/opencv.svg";
import premierepro from "../assets/img/skills/premierepro.svg";
import pytorch from "../assets/img/skills/pytorch.svg";
import selenium from "../assets/img/skills/selenium.svg";
import strapi from "../assets/img/skills/strapi.svg";
import tensorflow from "../assets/img/skills/tensorflow.svg";
import webix from "../assets/img/skills/webix.svg";
import wordpress from "../assets/img/skills/wordpress.svg";

import azure from "../assets/img/skills/azure.svg";
import blender from "../assets/img/skills/blender.svg";
import fastify from "../assets/img/skills/fastify.svg";
import figma from "../assets/img/skills/figma.svg";
import flutter from "../assets/img/skills/flutter.svg";
import haxe from "../assets/img/skills/haxe.svg";
import ionic from "../assets/img/skills/ionic.svg";
import markdown from "../assets/img/skills/markdown.svg";
import microsoftoffice from "../assets/img/skills/microsoftoffice.svg";
import picsart from "../assets/img/skills/picsart.svg";
import sketch from "../assets/img/skills/sketch.svg";
import unity from "../assets/img/skills/unity.svg";
import wolframalpha from "../assets/img/skills/wolframalpha.svg";

import canva from "../assets/img/skills/canva.svg";
import solidity from "../assets/img/skills/solidity.svg";
import nodejs from "../assets/img/skills/nodejs.svg";
import redux from "../assets/img/skills/redux.svg";
import jquery from "../assets/img/skills/jquery.svg";

import oracle from "../assets/img/skills/oracle.svg";
import meteor from "../assets/img/skills/meteor.svg";
import nestjs from "../assets/img/skills/nestjs.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    case "solidity":
      return solidity;
    case "nodejs":
      return nodejs;
    case "redux":
      return redux;
    case "jquery":
      return jquery;
    case "oracle":
      return oracle;
    case "meteor":
      return meteor;
    case "nestjs":
      return nestjs;
    default:
      break;
  }
};
