/* @flow */

import path from 'path';

import glob from 'glob';
import gulp from 'gulp';
import Pageres from 'pageres';

gulp.task('pageres', () => {
  glob
    .sync('/') // измените путь для вашего проекта
    .forEach((file: string) => {
      const pageres = new Pageres({
        crop: true,
        filename: 'screenshot-<%= size %>',
        delay: 2,
        css: '', // стили, которые вы хотите применить к странице перед созданием скриншота
        format: 'jpg',
      });

      pageres
        .src(file, ['1200x630', '600x315']) // рекомендуемые размеры для Facebook и Twitter
        .dest(path.dirname(file))
        .run((err: ?Error) => {
          if (err) {
            console.log(err); // eslint-disable-line no-console
          }
        });
    });
});