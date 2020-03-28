<?php namespace Teachplusplus\Teachers\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateTeachplusplusTeachersSubjects3 extends Migration
{
    public function up()
    {
        Schema::table('teachplusplus_teachers_subjects', function($table)
        {
            $table->dropColumn('feedback_id');
        });
    }
    
    public function down()
    {
        Schema::table('teachplusplus_teachers_subjects', function($table)
        {
            $table->integer('feedback_id')->nullable();
        });
    }
}