<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $mainCategories = ['Category A', 'Category B'];

        foreach ($mainCategories as $category):
            $mainCategory = Category::create(['title' => $category, 'parent_id' => null]);
            for($i = 1; $i <= 2; $i ++):
                $subCategoryTitle = 'SUB '.explode(' ',$category)[1].$i;
                $subCategory = Category::create(['title' => $subCategoryTitle, 'parent_id' => $mainCategory->id]);
                for($e = 1; $e <= 2; $e ++):
                    $subSubCategory = Category::create(['title' => 'SUB '.$subCategoryTitle.'-'.$e, 'parent_id' => $subCategory->id]);
                    for($x = 1; $x <= 2; $x ++):
                        $subSubSubCategory = Category::create(['title' => 'SUB SUB '.$subCategoryTitle.'-'.$e.'-'.$x, 'parent_id' => $subSubCategory->id]);
                        for($y = 1; $y <= 2; $y ++):
                            Category::create(['title' => 'SUB SUB SUB '.$subCategoryTitle.'-'.$e.'-'.$x.'-'.$y, 'parent_id' => $subSubSubCategory->id]);
                        endfor;
                    endfor;
                endfor;
            endfor;
        endforeach;
    }
}
